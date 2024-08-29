// export const useCounter = () => useState("count", () => 1);
export const useCounter = defineStore("count", {
  state: () => ({
    value: 1,
  }),
});
