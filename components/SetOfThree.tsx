import { Card } from 'antd';


export interface SetItem {
  imageUrl?: string
  title: string
  description?: string
}

export interface SetOfThreeProps {
  items:Array<SetItem>
}

const SetOfThree = ({items}: SetOfThreeProps) => {
  return (
    <div className="flex md:flex-row flex-col ">
      {[0, 1, 2].map((i:number) => {
        const setItem = items[i];
        return <div>
          <Card bordered={false} className="m-3 max-w-xs md:max-w-md" cover={<img alt="example" src={setItem.imageUrl} />}>
            <Card.Meta title={setItem.title} description={setItem.description} />
          </Card>
        </div>
      })}
    </div>
  );
}

export default SetOfThree;