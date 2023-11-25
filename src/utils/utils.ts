import noProfilePhoto from '@/assets/images/no-profile-photo.png';
import noImagenFound from '@/assets/images/no-image-found.png';

const getDate = (dateString: string): string => {
  const date = new Date(dateString)
  if (isNaN(date.getTime())) {
    return 'no date'
  }

  return date.getFullYear().toString()
}

const getPosterPath = (posterPath: string | null | undefined): string => {
  return posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : noImagenFound
}

const getProfilePath = (profilePath: string | null): string => {
  return profilePath
    ? `https://image.tmdb.org/t/p/w500${profilePath}`
    : noProfilePhoto
}

const getStillPath = (stillPath: string | null): string => {
  return stillPath
    ? `https://image.tmdb.org/t/p/w500${stillPath}`
    : noImagenFound
}


export { getDate, getPosterPath, getProfilePath, getStillPath }
