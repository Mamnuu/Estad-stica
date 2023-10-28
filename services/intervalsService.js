const calcularZNormalEstandar = (p) => { // Calcula el valor de Z dada la probabilidad, para cola derecha
  const normalEstandar = new jsStats.NormalDistribution(0, 1); // Distribución Normal Estándar
  const Z = normalEstandar.invCumulativeProbability(p);
  return Z;
}

export const intervalsService = {
  media: {
    poblacionNormalVarianzaConocida: (X, alpha, s, n) => {
      const Z = calcularZNormalEstandar(alpha / 2);
      console.log(Z);
      const L = X - Z * (s / (n ** (1 / 2)));
      const U = X + Z * (s / (n ** (1 / 2)));
      return { L, U }
    }
  }
}