import Image from 'next/image';
import React from 'react';

function Logo(props: any) {
  return (
    <div className="flex flex-center space-x-2">
      <Image
        width={50}
        height={50}
        className="rounded-full object-cover"
        src="https://cdn.sanity.io/images/u5zsoy4b/production/4e0a8c8fb4365797b2fd6c5390113bb37689eda2-2688x4032.jpg"
        alt="Logo"
      />
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default Logo;
