export const formatPersianDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split('/').map(Number);
    const date = new Date(year + 621, month - 1, day);
    return new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    }).format(date);
};

export const fmt = (n: number) => {
    const s = n.toLocaleString('fa-IR');
    return s;
};