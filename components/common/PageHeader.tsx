
type Props = {
    title: string,
    subTitle:string,
}

function PageHeader({title, subTitle}: Props) {
  return (
        <div className="space-y-5 lg:col-span-5 lg:pt-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl mb-3">
            {title}<span className="text-primary">.</span>
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            {subTitle}
          </p>
        </div>
  );
}

export default PageHeader;
