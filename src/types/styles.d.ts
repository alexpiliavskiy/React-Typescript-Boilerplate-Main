declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "simplebar-react" {
  export { default } from "simplebar-react/dist/index.js";
}
