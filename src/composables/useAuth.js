import { reactive } from "vue";

export default function () {
  const user = reactive({
    name: "Fotis",
    avatar:
      "https://miro.medium.com/v2/resize:fill:176:176/1*j7QGVGcLpSRLdgyQC7P_1A.jpeg",
  });

  return {
    user,
  };
}
