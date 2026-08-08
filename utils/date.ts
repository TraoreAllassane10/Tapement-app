export function formatRelativeDate(dateStr: string): string {
  if (!dateStr) return "";

  // Extraire le jours, le mois et l'année
  const [dayStr, monthStr, yearStr] = dateStr.split("/");
  const day = parseInt(dayStr, 10);
  const month = parseInt(monthStr, 10) - 1;
  const year = parseInt(yearStr, 10);

  //   Normaliser les dates à minuit pour comparer uniquement les jours
  const targetDate = new Date(year, month, day);
  targetDate.setHours(0, 0, 0, 0);

  const today = new Date();
  targetDate.setHours(0, 0, 0, 0);

  // Calculer la différence en jours
  const diffInMonths = today.getTime() - targetDate.getTime();
  const diffInDays = Math.floor(diffInMonths / (1000 * 60 * 60 * 24));

  //  Retourner le libellé selon la différence
  if (diffInDays === 0) return "Aujourd'hui";
  if (diffInDays === 1) return "Hier";
  if (diffInDays === 2) return "Avant-hier";

  // Moins d'une semaine
  if (diffInDays > 2 && diffInDays < 7) {
    return `Il y a ${diffInDays} jours`;
  }

  // Entre 1 semaine et 1 mois (~30 jours)
  if (diffInDays >= 7 && diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `Il y a ${weeks} semaine${weeks > 1 ? "s" : ""}`;
  }

  // Calcul du nombre de mois de différence
  const monthsDiff =
    (today.getFullYear() - targetDate.getFullYear()) * 12 +
    (today.getMonth() - targetDate.getMonth());

  if (monthsDiff === 1) return "Le mois dernier";
  if (monthsDiff > 1 && monthsDiff < 12) return `Il y a ${monthsDiff} mois`;

  // Plus d'un an
  if (monthsDiff >= 12) {
    const years = Math.floor(monthsDiff / 12);
    return `Il y a ${years} an${years > 1 ? "s" : ""}`;
  }

  return dateStr;
}
