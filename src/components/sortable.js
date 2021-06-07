import { SortableElement, SortableContainer } from 'react-sortable-hoc';

export const SortableItem = SortableElement(({value}) => <li>{value}</li>);

export const SortableList = SortableContainer(({items}) => {
    return (
        <ul style={{ listStyleType: "none" }}>
            {items.map((value, index) => (
                <SortableItem key={`item-${value.props.id}`} index={index} value={value} />
            ))}
        </ul>
    );
});
