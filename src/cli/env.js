export const parseEnv = () => {
    process.env.RSS_name1 = 'value1';
    process.env.RSS_name2 = 'value2';
    process.env.RSS_name3 = 'value3';
    process.env.RSS_name4 = 'value4';
    process.env.RSS_name5 = 'value5';

    let result = '';

    for (const [key, value] of Object.entries(process.env)) {
        if (key.includes('RSS_')) {
            result += `${key}: ${value}; `;
        }
    }

    console.log(result);
};

parseEnv();