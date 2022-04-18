export class User {
  constructor(
    public name:string,
    public bio: any,
    public public_repos: number,
    public followers: any,
    public following: any,
    public created_at: Date,
    public url: any,
    public login: string,
    public html_url: any,
    public location: any,
    public avatar_url?: any 
  ){}
}
