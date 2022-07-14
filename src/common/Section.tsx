import classNames from 'classnames';
import React from 'react';

type SectionProps = React.ComponentPropsWithRef<'section'> & {
  title: string;
  titleAs: keyof Pick<
    JSX.IntrinsicElements,
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  >;
  hideTitle?: boolean;
  headerActions?: React.ReactNode;
  headerClassName?: string;
};

const Section = React.forwardRef<React.ComponentRef<'section'>, SectionProps>(
  function Section(
    {
      title,
      titleAs,
      hideTitle,
      headerActions,
      headerClassName,
      children,
      ...rest
    },
    ref,
  ) {
    const Heading = titleAs;

    return (
      <section aria-label={title} ref={ref} {...rest}>
        <header
          className={classNames(
            hideTitle && 'sr-only',
            'flex items-center justify-between text-text-light',
            headerClassName,
          )}
        >
          <Heading className="font-semibold text-lg">{title}</Heading>
          {headerActions && (
            <div data-testid="section-actions">{headerActions}</div>
          )}
        </header>
        <div data-testid="section-content" className="h-full">
          {children}
        </div>
      </section>
    );
  },
);

export default Section;
