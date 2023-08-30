export const dateConverter = (date: string): string => {
    const newDate = new Date(date)
    const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = newDate.toLocaleString(undefined, options);
    return formattedDate
}