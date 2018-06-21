import express from 'express';

export default {
    removeEmpty(obj) {
        Object.keys(obj).forEach((k) => (obj[k] == null || obj[k] === undefined) && delete obj[k]);
        return obj;
    }
};