export default function ({ route, redirect }) {
  if (!route.params.slug) {
    return redirect('/')
  }
}