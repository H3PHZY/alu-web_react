/**
 * @jest-environment jsdom
 */

import React from "react";
import { getLatestNotification } from "../utils/utils";
import Notifications from "./Notifications";
import { render, screen } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection()

describe("Notifications tests", () => {
  it("should render the menuItem when displayDrawer is false", () => {
    render(<Notifications displayDrawer={false} />);
    screen.getByText("Your notifications");
  });

  it("should not render div.Notifications when displayDrawer is false", () => {
    render(<Notifications displayDrawer={false} />);
    expect(screen.queryByText("Here is the list of notifications")).toBeNull();
  });

  it("should not render menuItem when displayDrawer is true", () => {
    render(<Notifications displayDrawer={true} />);
    expect(screen.queryByText("Your notifications")).toBeNull();
  });

  it("should render div.Notifications when displayDrawer is true", () => {
    render(<Notifications displayDrawer={true} />);
    screen.getByText("Here is the list of notifications");
  });

  it("should render the correct message when there is no notification", () => {
    render(<Notifications displayDrawer={true} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });

  it("should render all notifications", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: getLatestNotification() },
    ];
    render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  it("should render the correct text", () => {
    render(<Notifications displayDrawer={true} />);
    screen.getByText("Here is the list of notifications");
  });

  it("should update component when listNotifications prop changes", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];
    const { rerender } = render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);

    const updatedListNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: "New notification" },
    ];
    rerender(<Notifications displayDrawer={true} listNotifications={updatedListNotifications} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  it("should call handleDisplayDrawer when clicking on the menu item", () => {
    const handleDisplayDrawer = jest.fn();
    render(<Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} />);
    const menuItem = screen.getByText("Your notifications");
    menuItem.click();
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it("should call handleHideDrawer when clicking on the close button", () => {
    const handleHideDrawer = jest.fn();
    render(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
    const closeButton = screen.getByRole("button", { name: /close/i });
    closeButton.click();
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
