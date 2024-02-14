interface HeadingProps {
  title?: string,
  paragraph?: string
}

export default function Heading(props: HeadingProps) {

  return (
    <div className="relative items-center w-full px-5 pt-10 mx-auto md:px-12 lg:px-16 lg:pt-24 max-w-7xl lg:py-24">
      <div>
        <div className="max-w-2xl">
          <p className="text-2xl font-medium tracking-tight text-black dark:text-white sm:text-4xl">
            {props.title || "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."}
          </p>
          <p className="max-w-2xl mt-4 text-lg tracking-tight text-gray-600">
            {props.paragraph || "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."}
          </p>
        </div>
      </div>
    </div>
  )
}
