/**
 * Funcion para filtrar un arreglo de objetos
 * @param {Object} property - JSON
 * @param {string} filter - keyword para filtrar
 * @returns True o False
 */
export const handleFilter = (property, filter) => {
  const { name, surname, title, code } = property;
  const { type, email, phone, country } = property;
  const { category, in_charge, date } = property;

  /* TableAllRegisterGeneral */
  if (name && surname && email) {
    return (
      name?.toLowerCase().includes(filter.toLowerCase()) ||
      surname?.toLowerCase().includes(filter.toLowerCase()) ||
      email?.toLowerCase().includes(filter.toLowerCase())
    );
  }

  /* TableAllInterviews */
  if (code && email && type && phone && country) {
    return (
      code?.toLowerCase().includes(filter.toLowerCase()) ||
      email?.toLowerCase().includes(filter.toLowerCase()) ||
      type?.toLowerCase().includes(filter.toLowerCase()) ||
      phone?.toLowerCase().includes(filter.toLowerCase()) ||
      country?.toLowerCase().includes(filter.toLowerCase())
    );
  }

  /* TableArticles & TableLiveStream */
  if (category && title && in_charge && date) {
    return (
      category?.toLowerCase().includes(filter.toLowerCase()) ||
      title?.toLowerCase().includes(filter.toLowerCase()) ||
      in_charge?.toLowerCase().includes(filter.toLowerCase()) ||
      date?.toLowerCase().includes(filter.toLowerCase())
    );
  }
};
