import React, { useState } from 'react';
import FullPage from '../../../ui-kit/FullPage';
import Padded from '../../../ui-kit/Padded';
import Img from '../../../ui-kit/Img';
import PlainText from '../../../ui-kit/PlainText';
import Title from '../../../ui-kit/Title';
import * as firstIcon from '../../../../assets/images/icons/objectA.png';
import * as secondIcon from '../../../../assets/images/icons/objectB.png';
import * as thirdIcon from '../../../../assets/images/icons/objectC.png';
import * as tower from '../../../../assets/images/pages/About_us_fiveth.png';
import * as back from '../../../../assets/images/pages/facades-5.jpg';
import './FivethBlock.less';


function ProjectsFivethBlock() {
    return (
        <div className='facades-fiveth-wrapper'>
            <FullPage min>
                <Img src={back} className='back' />
                <Padded className='content-wrapper'>
                    <div className='title'>
                        О системе
                    </div>
                    <PlainText className='text'>
                        Навесной вентилируемый фасад — система, состоящая из облицовочных материалов, которые
                        крепятся на каркас из н/ж стали или алюминия к несущей плоскости стены или к плитам
                        перекрытия. По зазору между облицовкой и стеной свободно циркулирует воздух, который
                        убирает конденсат и влагу с конструкций. Родиной навесных вентилируемых фасадных систем
                        в их современном виде принято считать Германию. Начиная с 1950-х годов, там проводилис
                        научные исследования, были разработаны конструктивные элементы и технология монтажа
                        вентилируемого фасада.  Все элементы крепления вентилируемой фасадной системы являются
                        универсальными, что позволяет решать сложные архитектурные и конструкторские задачи от
                        классических до современных. Для дополнительного утепления стен здания к стене
                        посредством тарельчатых дюбелей крепится утеплитель из минваты. Величина зазора между
                        утеплителем и фасадом здания по разным источниками колеблется от 20 до 50 мм. Это
                        позволяет восходящим потокам воздуха циркулировать между облицовочным материалом и
                        утеплителем, высушивая слой утеплителя в случае попадания на него влаги. С целью
                        предотвращения выдувания волокон из утеплителя, в случае применения утеплителя с
                        "некешированной" поверхностью, он накрывается влаго-ветрозащитной, паропроницаемой
                        мембраной (плёнкой), но это не является необходимым требованием к устройству
                        систем вентилируемых фасадов. Воздушный зазор между стеной и декоративной панелью
                        значительно уменьшает теплоотдачу здания. Данная система способствует сохранению
                        тепла в помещении, препятствует появлению сырости и существенно уменьшает количество
                        строительного материала, необходимого для возведения стен зданий, что ведёт к экономии
                        средств при строительстве и облегчению всего сооружения
                    </PlainText>
                    <div className='bottom-title-wrapper'>
                        <Title className='bottom-title'>
                            О системе
                        </Title>
                    </div>
                </Padded>
            </FullPage>
        </div>
    );
}

export default ProjectsFivethBlock;
