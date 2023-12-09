export default function objFromFormData(formData: FormData) {
  return Object.fromEntries(formData.entries());
}