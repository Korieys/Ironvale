import { db } from './firebase';
import { collection, addDoc, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore';

// Add a new lead
export const submitLead = async (leadData) => {
    try {
        const docRef = await addDoc(collection(db, "leads"), {
            ...leadData,
            createdAt: serverTimestamp(),
            status: 'new'
        });
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error("Error adding document: ", error);
        return { success: false, error: error.message };
    }
};

// Fetch all leads (for admin)
export const getLeads = async () => {
    try {
        const leadsRef = collection(db, "leads");
        const q = query(leadsRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Error getting documents: ", error);
        throw error;
    }
};
