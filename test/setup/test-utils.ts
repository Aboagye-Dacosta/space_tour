import { render, RenderOptions } from "@testing-library/react";
import { ReactNode } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../../src/router";



const customRender = (ui: ReactNode, options?: RenderOptions) => {

    return render(ui, {
        ...options,
        wrapper: () => {
            return RouterProvider({ router: router });
        },
    },);
}

export * from "@testing-library/react";
export { customRender as render };

