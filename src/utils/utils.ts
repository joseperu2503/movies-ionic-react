const getDate = (dateString: string): string => {
  const date = new Date(dateString)
  if (isNaN(date.getTime())) {
    return 'no date'
  }

  return date.getFullYear().toString()
}

const getPosterPath = (posterPath: string | null): string => {
  return posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "https://www.racearchive.org.uk/wp-content/themes/dizy/assets/images/no-image/No-Image-Found-400x264.png"
}

const getProfilePath = (profilePath: string | null): string => {
  return profilePath
    ? `https://image.tmdb.org/t/p/w500${profilePath}`
    : "https://www.racearchive.org.uk/wp-content/themes/dizy/assets/images/no-image/No-Image-Found-400x264.png"
}

export { getDate, getPosterPath, getProfilePath }
