import React, { memo, useCallback } from 'react';

export interface Props {
    onClick?: () => unknown;
}

export const TodoPlaceholderComponent = memo(({ onClick }: Props) => {
    let handleClick = useCallback(() => {
        onClick?.();
    }, [onClick]);

    return <div className={'flex-grow-1'} data-cy="todo-placeholder" onClick={handleClick} />;
});
