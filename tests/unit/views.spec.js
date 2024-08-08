import { mount } from "@vue/test-utils";
import ContactView from "@/views/ContactView.vue";
import AboutView from "@/views/AboutView.vue";
import { createRouter, createWebHistory } from "vue-router";

describe("Test vista 'About'", () => {
  it("Test1 - Snapshot vista 'About' succesful", () => {
    const wrapper = mount(AboutView);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Test2 - Prueba existencia del componente en la ruta", async () => {
    const routes = [
      {
        path: "/about",
        name: "about",
        component: () => AboutView,
      },
    ];
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
    });

    router.push("/about");
    await router.isReady();

    const wrapper = mount(AboutView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(AboutView).exists()).toBe(true);
  });
});

describe("Tests de vista 'Contact'", () => {
  it("Test1 - Snapshot vista 'Contact'", () => {
    const wrapper = mount(ContactView);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Test2 - Prueba existencia del componente en la ruta", async () => {
    const routes = [
      {
        path: "/contact",
        name: "contact",
        component: () => ContactView,
      },
    ];
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
    });

    router.push("/contact");
    await router.isReady();

    const wrapper = mount(ContactView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(ContactView).exists()).toBe(true);
  });
});
