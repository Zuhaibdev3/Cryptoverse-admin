export const convertUTCToDate = (dateStr) => {
    if (!dateStr) return
    const date = new Date(dateStr);

    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }).format(date);

    return formattedDate

}