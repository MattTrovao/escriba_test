export const formatDate = (date) => {
  let d = new Date(date).toLocaleDateString("pt-BR", { timeZone: "UTC" });
  return d;
};

export const formatCurrency = (valor) => {
  const novoValor = valor ? valor : 0;
  return `${parseFloat(novoValor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`;
};

export const formatDocument = (doc) => {
  if (doc) {
    const documentFormated = doc.replace(/\D/g, "");
    if (documentFormated.length === 11) {
      return documentFormated.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/g,
        "$1.$2.$3-$4"
      );
    }
    return documentFormated.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
      "$1.$2.$3/$4-$5"
    );
  }
  return "Não há CPF/CNPJ cadastrado";
};