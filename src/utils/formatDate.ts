export function formatDateRange(startDate: string, endDate?: string): string {
  const start = formatDate(startDate)
  const end = endDate ? formatDate(endDate) : 'Present'
  return `${start} — ${end}`
}

export function formatDate(date: string): string {
  if (date === 'Present') return 'Present'

  const [year, month] = date.split('-')
  if (!month) return year

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ]
  const monthIndex = parseInt(month, 10) - 1
  return `${monthNames[monthIndex] ?? month} ${year}`
}
