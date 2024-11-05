import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Navigator from "../src/components/Navigator";
import { render, screen } from "./setup/test-utils";

describe("Testing Navigator", () => {
  const destinations = ["home", "destination", "crew", "technology"];

  const renderComponent = ({
    role,
    destinations,
    genDestination,
  }: {
    role: "link" | "button";
    destinations: string[];
    genDestination(destination: string, index: number): string;
  }) => {
    render(<Navigator destinations={destinations} type={role} />);
    const buttons = destinations.map((destination, i) =>
      screen.getByRole("", { name: genDestination(destination, i) })
    );
    return {
      buttons,
    };
  };

  it("should change the active nav tab to the current link that is clicked", async () => {
    const { buttons: links } = renderComponent({
      role: "link",
      destinations: destinations,
      genDestination: (str, i) => `0${i} ${str}`,
    });

    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      await userEvent.click(link);

      const activeLink = await screen.findByRole("link", {
        name: new RegExp(destinations[i], "i"),
      });

      expect(activeLink.nextSibling).toBeDefined();
      expect(activeLink.nextSibling?.nodeName).toBe("DIV");
      expect(activeLink.parentNode?.childNodes).toHaveLength(2);
    }
  });
});
