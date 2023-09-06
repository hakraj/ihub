/* The PUT method modifies user in the mongodb database. */
const putUser = async (user: { email: string, name: string, phone: string, }) => {

  const contentType = 'application/json'
  const { email } = user

  try {
    const res: Response = await fetch(`/api/users/${email}`, {
      method: 'PUT',
      headers: {
        Accept: contentType,
        'Content-Type': contentType,
      },
      body: JSON.stringify(user),
    })

    // Throw error with status code in case Fetch API req failed
    if (!res.ok) {
      throw new Error(res.status.toString())
    }

    return { success: true }
  } catch (error) {
    console.log('Failed to add post')
    return { success: false }
  }
}

export { putUser }