import { FormControl } from "@angular/forms";

export function restrictedWords(words: any) {
  return (control: FormControl): { [key: string]: string } | null => {
    if (!words) return null;

    const invalidWords: string[] = words
      .map((word: any) => control.value.includes(word) ? word : null)
      .filter((word: any) => word != null)

    return invalidWords && invalidWords.length > 0
      ? { 'restrictedWords': invalidWords.join(', ') }
      : null
  }
}