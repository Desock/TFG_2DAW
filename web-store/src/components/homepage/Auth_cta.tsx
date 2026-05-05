type AuthCTAProps = {
  data: {
    title?: string;
    description?: string;
    loginLabel?: string;
    registerLabel?: string;
  };
};

export default function AuthCTA({ data }: AuthCTAProps) {
  return (
    <section className="auth-cta">
      {data.title && <h2>{data.title}</h2>}
      {data.description && <p>{data.description}</p>}

      <div className="auth-buttons">
        <a href="/login" className="btn-login pr-1">
          {data.loginLabel || "Iniciar sesión"}
        </a>

        <a href="/register" className="btn-register">
          {data.registerLabel || "Registrarse"}
        </a>
      </div>
    </section>
  );
}
