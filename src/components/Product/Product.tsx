import {
    Badge,
    Container,
    Group,
    SimpleGrid,
    Text,
    Title,
} from '@mantine/core';
import classes from './Product.module.css';
import {ProductCardProps, ProductCard} from "@/components/Product/Card/ProductCard";

const mockdata : ProductCardProps[] = [
    {
        title: 'Extreme performance',
        description:
            'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
        image: 'https://forevernew.co.za/cdn/shop/files/AllTerritories_Mannequin_29476401_F.jpg',
        link: '#',
    },
    {
        title: 'Privacy focused',
        description:
            'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
        image: 'https://forevernew.co.za/cdn/shop/files/AllTerritories_Mannequin_29476401_F.jpg',
        link: '#',
    },
    {
        title: 'No third parties',
        description:
            'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
        image: 'https://forevernew.co.za/cdn/shop/files/AllTerritories_Mannequin_29476401_F.jpg',
        link: '#',
    },
];

export function Product() {
    const products = mockdata.map((product) => (
        <ProductCard title={product.title} description={product.description} image={product.image} />
    ));

    return (
        <Container size="lg" py="xl">
            <Group justify="center">
                <Badge variant="filled" size="lg">
                    Wrap & Wonder - original design scarves
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
                Step into a world of elegance and warmth
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                Discover the perfect blend of fashion and function, and let your next favorite accessory find you.
                Wrap yourself in wonder today!
            </Text>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                {products}
            </SimpleGrid>
        </Container>
    );
}
