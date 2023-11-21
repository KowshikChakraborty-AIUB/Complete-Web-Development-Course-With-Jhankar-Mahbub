import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className="text-3xl">
                <span>
                    Hi, Welcome
                </span>
                <span className="ml-2">
                    {
                        user.displayName
                            ?
                            user.displayName
                            :
                            'Back'
                    }
                </span>
            </h2>
        </div>
    );
};

export default AdminHome;