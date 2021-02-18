export class NoResultsFoundException extends Error {
  public static NO_RESULTS_FOUND_MESSAGE = 'No Results Found For';
  constructor(ou: string, yearQuarter: number) {
    super(
      `${NoResultsFoundException.NO_RESULTS_FOUND_MESSAGE} - OUs: ${ou} in Year Quarter: ${yearQuarter}`,
    );
  }
}
