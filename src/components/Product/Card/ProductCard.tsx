import classes from './ProductCard.module.css';
import { AspectRatio, Card, Image, Text } from '@mantine/core';

export interface ProductCardProps {
    title: string;
    description: string;
    image: string;
    link?: string;
}

export function ProductCard({title, description, image, link ="#"}: ProductCardProps) {
    return (
        <Card key={title} p="md" radius="md" component="a" href={link} className={classes.card}>
            <AspectRatio ratio={1920 / 1080}>
                <Image src={image} />
            </AspectRatio>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
                {title}
            </Text>
            <Text className={classes.title} mt={5}>
                {description}
            </Text>
        </Card>
    );
}
