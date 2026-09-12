export const homePath = '/'

export function getProjectSlug(project) {
  return project.slug || project.id
}

export function getProjectPath(project) {
  return `/projetos/${getProjectSlug(project)}`
}

export function getProjectNumber(index) {
  return String(index + 1).padStart(2, '0')
}
