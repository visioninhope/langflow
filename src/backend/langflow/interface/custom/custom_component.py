from typing import Callable, Optional
from fastapi import HTTPException
from langflow.interface.custom.constants import CUSTOM_COMPONENT_SUPPORTED_TYPES
from langflow.interface.custom.component import Component

from langflow.utils import validate

from langflow.database.base import session_getter
from langflow.database.models.flow import Flow
from pydantic import Extra


class CustomComponent(Component, extra=Extra.allow):
    code: Optional[str]
    field_config: dict = {}
    code_class_base_inheritance = "CustomComponent"
    function_entrypoint_name = "build"
    function: Optional[Callable] = None
    return_type_valid_list = list(CUSTOM_COMPONENT_SUPPORTED_TYPES.keys())
    repr_value: Optional[str] = ""

    def __init__(self, **data):
        super().__init__(**data)

    def custom_repr(self):
        return self.repr_value

    def build_config(self):
        return self.field_config

    def _class_template_validation(self, code: str) -> bool:
        if not code:
            raise HTTPException(
                status_code=400,
                detail={
                    "error": self.ERROR_CODE_NULL,
                    "traceback": "",
                },
            )

        # TODO: Create the logic to validate what the Custom Component
        # should have as a prerequisite to be able to execute
        return True

    def is_check_valid(self) -> bool:
        return self._class_template_validation(self.code) if self.code else False

    def get_code_tree(self, code: str):
        return super().get_code_tree(code)

    @property
    def get_function_entrypoint_args(self) -> str:
        if not self.code:
            return ""
        tree = self.get_code_tree(self.code)

        component_classes = [
            cls
            for cls in tree["classes"]
            if self.code_class_base_inheritance in cls["bases"]
        ]
        if not component_classes:
            return ""

        # Assume the first Component class is the one we're interested in
        component_class = component_classes[0]
        build_methods = [
            method
            for method in component_class["methods"]
            if method["name"] == self.function_entrypoint_name
        ]

        if not build_methods:
            return ""

        build_method = build_methods[0]

        return build_method["args"]

    @property
    def get_function_entrypoint_return_type(self) -> str:
        if not self.code:
            return ""
        tree = self.get_code_tree(self.code)

        component_classes = [
            cls
            for cls in tree["classes"]
            if self.code_class_base_inheritance in cls["bases"]
        ]
        if not component_classes:
            return ""

        # Assume the first Component class is the one we're interested in
        component_class = component_classes[0]
        build_methods = [
            method
            for method in component_class["methods"]
            if method["name"] == self.function_entrypoint_name
        ]

        if not build_methods:
            return ""

        build_method = build_methods[0]

        return build_method["return_type"]

    @property
    def get_main_class_name(self):
        tree = self.get_code_tree(self.code)

        base_name = self.code_class_base_inheritance
        method_name = self.function_entrypoint_name

        classes = []
        for item in tree.get("classes"):
            if base_name in item["bases"]:
                method_names = [method["name"] for method in item["methods"]]
                if method_name in method_names:
                    classes.append(item["name"])

        # Get just the first item
        return next(iter(classes), "")

    @property
    def build_template_config(self):
        tree = self.get_code_tree(self.code)

        attributes = [
            main_class["attributes"]
            for main_class in tree.get("classes")
            if main_class["name"] == self.get_main_class_name
        ]
        # Get just the first item
        attributes = next(iter(attributes), [])

        return super().build_template_config(attributes)

    @property
    def get_function(self):
        return validate.create_function(self.code, self.function_entrypoint_name)

    def load_flow(self, flow_id: str, tweaks: Optional[dict] = None):
        from langflow.processing.process import build_sorted_vertices_with_caching
        from langflow.processing.process import process_tweaks

        with session_getter() as session:
            graph_data = flow.data if (flow := session.get(Flow, flow_id)) else None
        if not graph_data:
            raise ValueError(f"Flow {flow_id} not found")
        if tweaks:
            graph_data = process_tweaks(graph_data=graph_data, tweaks=tweaks)
        return build_sorted_vertices_with_caching(graph_data)

    def list_flows(self):
        with session_getter() as session:
            flows = session.query(Flow).all()
        return flows

    def build(self):
        raise NotImplementedError
