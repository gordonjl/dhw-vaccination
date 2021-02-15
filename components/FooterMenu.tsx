interface FooterMenuProps {
  title:string
  items: Array<{ title: string, url?: string }>

}
export function FooterMenu({title, items }: FooterMenuProps) {
  return (<div >
    <div className="text-base tracking-wider font-bold ">{title}</div>
    <div className="h-1 bg-secondary w-8 my-3"></div>
    <ul className="space-y-2">
      {items.map((item) => <li><a href="{item.url}">{item.title}</a></li>)}
    </ul>
  </div>);
}
