export function validateUrl(text: string) {
  if (
    text != null &&
    text.match(
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    )
  ) {
    return true;
  }

  if (text == null || text === "") return true;

  return "This is not a valid URL";
}
