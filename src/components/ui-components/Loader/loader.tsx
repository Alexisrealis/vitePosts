import React from 'react'
import ContentLoader from 'react-content-loader'
import * as SC from './styles'

interface ILoaderProps {
  [key: string]: any;
}

const Loader = (props:ILoaderProps) => (
  <SC.Loader>
    <ContentLoader
      viewBox="0 0 600 260"
      height={260}
      width={600}
      backgroundColor="blue"
      {...props}
    >
      <circle cx="150" cy="86" r="8" />
      <circle cx="194" cy="86" r="8" />
      <circle cx="238" cy="86" r="8" />
    </ContentLoader>
  </SC.Loader>

)

export default Loader