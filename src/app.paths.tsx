class AppRoutes {
  /**
   * The AppRoutes class defines the `getInstance` method that lets clients access
   * the unique AppRoutes instance.
   */
  private static instance: AppRoutes;
  /**
   * The AppRoutes's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {}
  /**
   * The static method that controls the access to the singleton instance.
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): AppRoutes {
    if (!this.instance) {
      return (AppRoutes.instance = new AppRoutes());
    }
    return this.instance;
  }

  // paths
  getBasePath(): string {
    return "/";
  }

  getExamplePagePath():string{
    return `/address/:addressId/view`;
  }

  getExamplePageUrl():string{
    return this.getExamplePagePath();
  }

  // Example on a path with dynamic variables
  getExampleByIdPagePath():string{
    return `/example/:id`;
  }

  getExampleByIdPageUrl(id:string):string{
    return this.getExampleByIdPagePath().replace(':id',id);
  }
  // ./Example
}

export const appRoutesObj = AppRoutes.getInstance();
