import React from 'react';
import { storiesOf } from '@storybook/react';
import { iconCheckmarkSolid } from 'carbon-icons';
import Icon from '../Icon';
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListInput,
  StructuredListCell,
} from '../StructuredList';
import StructuredListSkeleton from '../StructuredList/StructuredList.Skeleton';
import { componentsX } from '../../internal/FeatureFlags';

storiesOf('StructuredList', module)
  .add(
    'Simple',
    () => (
      <StructuredListWrapper>
        <StructuredListHead>
          <StructuredListRow head>
            <StructuredListCell head>ColumnA</StructuredListCell>
            <StructuredListCell head>ColumnB</StructuredListCell>
            <StructuredListCell head>ColumnC</StructuredListCell>
          </StructuredListRow>
        </StructuredListHead>
        <StructuredListBody>
          <StructuredListRow>
            <StructuredListCell noWrap>Row 1</StructuredListCell>
            <StructuredListCell>Row 1</StructuredListCell>
            <StructuredListCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
              magna, finibus id tortor sed, aliquet bibendum augue. Aenean
              posuere sem vel euismod dignissim. Nulla ut cursus dolor.
              Pellentesque vulputate nisl a porttitor interdum.
            </StructuredListCell>
          </StructuredListRow>
          <StructuredListRow>
            <StructuredListCell noWrap>Row 2</StructuredListCell>
            <StructuredListCell>Row 2</StructuredListCell>
            <StructuredListCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
              magna, finibus id tortor sed, aliquet bibendum augue. Aenean
              posuere sem vel euismod dignissim. Nulla ut cursus dolor.
              Pellentesque vulputate nisl a porttitor interdum.
            </StructuredListCell>
          </StructuredListRow>
        </StructuredListBody>
      </StructuredListWrapper>
    ),
    {
      info: {
        text: `
            Structured Lists group content that is similar or related, such as terms or definitions.
          `,
      },
    }
  )
  .add(
    'Selection',
    () => {
      const emptyStructuredListHeadCell = (
        <StructuredListCell head>{''}</StructuredListCell>
      );
      const structuredListHeadColumns = [
        <StructuredListCell head>ColumnA</StructuredListCell>,
        <StructuredListCell head>ColumnB</StructuredListCell>,
        <StructuredListCell head>ColumnC</StructuredListCell>,
      ];
      const structuredListBodyRowGenerator = numRows => {
        const checkbox = i => (
          <>
            <StructuredListInput
              id={`row-${i}`}
              value={`row-${i}`}
              title={`row-${i}`}
              name="row-0"
              defaultChecked={!i || null}
            />
            <StructuredListCell>
              <Icon
                className="bx--structured-list-svg"
                icon={iconCheckmarkSolid}
                description="select an option"
              />
            </StructuredListCell>
          </>
        );
        const structuredListBodyColumns = i => [
          <StructuredListCell>Row {i}</StructuredListCell>,
          <StructuredListCell>Row {i}</StructuredListCell>,
          <StructuredListCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
            magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
            sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
            vulputate nisl a porttitor interdum.
          </StructuredListCell>,
        ];
        return Array.apply(null, Array(numRows)).map((n, i) => (
          <StructuredListRow label htmlFor={`row-${i}`}>
            {componentsX
              ? [...structuredListBodyColumns(i), checkbox(i)]
              : [checkbox(i), ...structuredListBodyColumns(i)]}
          </StructuredListRow>
        ));
      };
      return (
        <StructuredListWrapper selection border>
          <StructuredListHead>
            <StructuredListRow head>
              {componentsX
                ? [...structuredListHeadColumns, emptyStructuredListHeadCell]
                : [emptyStructuredListHeadCell, ...structuredListHeadColumns]}
            </StructuredListRow>
          </StructuredListHead>
          <StructuredListBody>
            {structuredListBodyRowGenerator(4)}
          </StructuredListBody>
        </StructuredListWrapper>
      );
    },
    {
      info: {
        text: `
        Structured Lists with selection allow a row of list content to be selected.
      `,
      },
    }
  )
  .add(
    'skeleton',
    () => (
      <div style={{ width: '800px' }}>
        <StructuredListSkeleton />
        <StructuredListSkeleton border />
      </div>
    ),
    {
      info: {
        text: `
            Placeholder skeleton state to use when content is loading.
          `,
      },
    }
  );
