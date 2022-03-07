declare module "*.json" {
  // ! Не можем знать содержимое файла
  const value: unknown;
  export default value;
}
