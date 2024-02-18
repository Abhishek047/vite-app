export class AuthState {
  // @nanoId for tracking user progress
  nanoId: string = '';

  // @hasDetails for tracking user has details in the db progress
  hasDetails: boolean = false;

  // @hasDetails for tracking user has details in the db progress
  loadingAuthDetails: boolean = true;
}
