export function createFormData(lang: string, data: File) {
  const formData = new FormData();
  formData.append("lang", lang);
  formData.append("file", data);
  return formData;
}

export function cleanTranscriprion(text: string) {
  return text.replace("\n\n", " ");
}

export const copyTextToClipboard = async (text: string) => {
  if (typeof text === "string") {
    try {
      await navigator.clipboard.writeText(text);
    } catch (_) {
      console.log("Нет доступа к буферу обмена");
    }
  }
};

export const getCurrentDate = () => new Date().toLocaleDateString();
export const getCurrentTime = () => new Date().toLocaleTimeString().slice(0, 5);
