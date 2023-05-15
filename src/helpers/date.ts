import { format, addDays } from 'date-fns';

export function formatDatePtBr(date: string) {
  if (date) {
    const newDate = addDays(new Date(date), 1);
    return format(newDate, 'dd/MM/yyyy');
  }

  return date;
}
