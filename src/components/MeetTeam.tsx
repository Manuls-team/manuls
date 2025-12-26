import oleksandrAlieksieievAvatar from "../assets/avatars/oleksandr-alieksieiev.jpg";
import denysStalenkovAvatar from "../assets/avatars/denys-stalenkov.jpg";
import oleksandrBadzymAvatar from "../assets/avatars/oleksandr-badzym.jpg";
import oleksiiLysytsiaAvatar from "../assets/avatars/oleksii-lysytsia.jpg";

export default function Team() {
  const teamMembers = [
    {
      name: "Oleksandr Alieksieiev",
      role: "CEO, Frontend Developer",
      avatar: oleksandrAlieksieievAvatar,
      description:
        "This is description. This is description. This is description. This is description",
    },
    {
      name: "Denys Stalenkov",
      role: "CTO, Frontend Practice Lead",
      avatar: denysStalenkovAvatar,
      description:
        "This is description. This is description. This is description. This is description",
    },
    {
      name: "Oleksandr Badzym",
      role: "Account Manager, Frontend Developer",
      avatar: oleksandrBadzymAvatar,
      description:
        "This is description. This is description. This is description. This is description",
    },
    {
      name: "Oleksii Lysytsia",
      role: "Quality Assurance Manager",
      avatar: oleksiiLysytsiaAvatar,
      description:
        "This is description. This is description. This is description. This is description",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1003px] h-[295px] gradient-team blur-[200px] pointer-events-none" />

      <div className="relative w-full max-w-[1512px] mx-auto px-[132px]">
        <h2 className="text-4xl font-bold uppercase text-center mb-16">
          <span className="gradient-text">MEET</span>{" "}
          <span className="text-text-title">OUR TEAM</span>
        </h2>

        <div className="grid grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-transparent border border-stroke rounded-lg p-6 flex flex-col items-center gap-6"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-20 h-20 rounded-full"
              />

              <div className="flex flex-col gap-2 text-center">
                <h3 className="text-base font-medium text-text-title">
                  {member.name}
                </h3>
                <p className="text-sm font-normal text-secondary">
                  {member.role}
                </p>
              </div>

              <p className="text-sm font-normal text-text-main text-center">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
