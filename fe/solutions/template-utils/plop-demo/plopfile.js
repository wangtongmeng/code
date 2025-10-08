module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a new Vue 3 component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      }
    ],
    actions: function(data) {
      const path = require('path');
      return [
        {
          type: "add",
          path: path.join(process.cwd(), "{{pascalCase name}}.vue"),
          templateFile: "plop-templates/hybrid/component/Component.vue.hbs",
        },
        {
          type: "add",
          path: path.join(process.cwd(), "{{pascalCase name}}.css"),
          templateFile: "plop-templates/hybrid/component/Component.css.hbs",
        },
      ];
    }
  });
  plop.setGenerator("page", {
    description: "Create a new page module",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Page name:",
      }
    ],
    actions: function(data) {
      const path = require('path');
      return [
        {
          type: "add",
          path: path.join(process.cwd(), "{{pascalCase name}}/index.ts"),
          templateFile: "plop-templates/hybrid/page/index.ts.hbs",
        },
        {
          type: "add",
          path: path.join(process.cwd(), "{{pascalCase name}}/App.vue"),
          templateFile: "plop-templates/hybrid/page/App.vue.hbs",
        },
        {
          type: "add",
          path: path.join(process.cwd(), "{{pascalCase name}}/components/{{pascalCase name}}Component.vue"),
          templateFile: "plop-templates/hybrid/page/Component.vue.hbs",
        },
      ];
    }
  });
};
