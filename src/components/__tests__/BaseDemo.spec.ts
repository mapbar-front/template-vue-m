import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import BaseDemo from "../base-demo.vue";

describe("base-demo", () => {
  it("render props", () => {
    const wrapper = mount(BaseDemo, { props: { msg: "hello world" } });
    expect(wrapper.text()).toContain("hello world");
  });
});

describe("base-demo", () => {
  it("render emits", () => {
    const wrapper = mount(BaseDemo, { props: { msg: "hello world" } });
    wrapper.find(".button").trigger("click");
    expect(wrapper.emitted().update).toBeTruthy();
  });
});

// wrapper.vm.$emit("change", 1);
describe("base-demo", () => {
  it("render emits", () => {
    const wrapper = mount(BaseDemo, { props: { msg: "hello world" } });
    wrapper.find(".button").trigger("click");
    expect(wrapper.emitted().update).toBeTruthy();
  });
});

describe("base-demo", () => {
  it("render classes", () => {
    const wrapper = mount(BaseDemo, { props: { msg: "hello world" } });
    expect(wrapper.classes()).toContain("base-demo");
  });
});
