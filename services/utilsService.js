export const utilsService = {
  isNumber: (value) => {
    return /^[0-9]+|[()\.]+/.test(value);
  }
}
